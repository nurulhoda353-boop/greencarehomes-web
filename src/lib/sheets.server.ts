const SPREADSHEET_ID = "19zizFyd7JiaUUPdvNenKKlxXRHIjU27PwqKPKedpEi4";
const GATEWAY = "https://connector-gateway.lovable.dev/google_sheets/v4";

async function appendRow(sheetTab: string, row: (string | number)[]) {
  const lovableKey = process.env.LOVABLE_API_KEY;
  const sheetsKey = process.env.GOOGLE_SHEETS_API_KEY;

  if (!lovableKey) throw new Error("LOVABLE_API_KEY is not configured");
  if (!sheetsKey) throw new Error("GOOGLE_SHEETS_API_KEY is not configured");

  const metaUrl = `${GATEWAY}/spreadsheets/${SPREADSHEET_ID}`;
  const metaRes = await fetch(metaUrl, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${lovableKey}`,
      "X-Connection-Api-Key": sheetsKey,
    },
  });

  if (!metaRes.ok) {
    const text = await metaRes.text();
    throw new Error(`Google Sheets metadata failed [${metaRes.status}]: ${text}`);
  }

  const meta = await metaRes.json();
  const sheet = meta.sheets?.find((s: any) => s.properties?.title === sheetTab);
  if (!sheet) throw new Error(`Sheet tab "${sheetTab}" not found`);

  const sheetId = sheet.properties.sheetId;
  const appendUrl = `${GATEWAY}/spreadsheets/${SPREADSHEET_ID}/values/${sheetTab}!A1:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;
  const appendRes = await fetch(appendUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${lovableKey}`,
      "X-Connection-Api-Key": sheetsKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ values: [row] }),
  });

  if (!appendRes.ok) {
    const text = await appendRes.text();
    throw new Error(`Google Sheets append failed [${appendRes.status}]: ${text}`);
  }

  const appendData = await appendRes.json();
  const updatedRange: string = appendData.updates?.updatedRange || "";
  const match = updatedRange.match(/!A(\d+):/);

  if (match) {
    const rowIndex = parseInt(match[1], 10) - 1;
    const batchUrl = `${GATEWAY}/spreadsheets/${SPREADSHEET_ID}:batchUpdate`;
    const batchRes = await fetch(batchUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": sheetsKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        requests: [
          {
            repeatCell: {
              range: {
                sheetId,
                startRowIndex: rowIndex,
                endRowIndex: rowIndex + 1,
                startColumnIndex: 0,
                endColumnIndex: row.length,
              },
              cell: {
                userEnteredFormat: {
                  textFormat: {
                    foregroundColor: { red: 0, green: 0, blue: 0 },
                  },
                },
              },
              fields: "userEnteredFormat.textFormat.foregroundColor",
            },
          },
        ],
      }),
    });

    if (!batchRes.ok) {
      const text = await batchRes.text();
      console.error(`Text color format failed [${batchRes.status}]: ${text}`);
    }
  }

  return appendData;
}

export async function appendContactEntry(data: {
  name: string;
  phone: string;
  email?: string;
  service?: string;
  message?: string;
}) {
  return appendRow("Contact", [
    new Date().toISOString(),
    data.name,
    data.phone,
    data.email ?? "",
    data.service ?? "",
    data.message ?? "",
  ]);
}

export async function appendAppointmentEntry(data: {
  name: string;
  phone: string;
  email?: string;
  service: string;
  patient: string;
  date: string;
  time: string;
  address: string;
  notes?: string;
}) {
  return appendRow("Appointments", [
    new Date().toISOString(),
    data.name,
    data.phone,
    data.email ?? "",
    data.service,
    data.patient,
    data.date,
    data.time,
    data.address,
    data.notes ?? "",
  ]);
}