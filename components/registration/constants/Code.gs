/**
 * Google Apps Script Web App Endpoint for Pondok Modern Darul Ihsan PSB Pendaftaran.
 *
 * Spreadsheet URL:
 * https://docs.google.com/spreadsheets/d/1g1YGFKviCy0ubzHI-3-wudM51n70NH0yZy79p9WNxXI/edit
 *
 * Instructions:
 * 1. Open Google Sheet.
 * 2. Click Extensions -> Apps Script.
 * 3. Replace default code with this Code.gs script.
 * 4. Replace SPREADSHEET_ID below with: '1g1YGFKviCy0ubzHI-3-wudM51n70NH0yZy79p9WNxXI'
 * 5. Click Deploy -> New Deployment.
 * 6. Select "Web App". Execute as: "Me", Who has access: "Anyone".
 * 7. Copy the Web App URL and paste it as NEXT_PUBLIC_APPS_SCRIPT_URL in your Next.js .env file.
 */

var SPREADSHEET_ID = '1g1YGFKviCy0ubzHI-3-wudM51n70NH0yZy79p9WNxXI';
var SHEET_NAME = 'Sheet1';

function doPost(e) {
  try {
    // Parse input payload
    var requestData = JSON.parse(e.postData.contents);
    
    // Open sheet
    var spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = spreadsheet.getSheetByName(SHEE_NAME) || spreadsheet.getSheets()[0];
    
    // Generate Registration ID: REG/YEAR/RANDOM
    var regYear = new Date().getFullYear();
    var regRandomNum = Math.floor(1000 + Math.random() * 9000);
    var registrationId = 'REG/' + regYear + '/' + regRandomNum;
    
    // Prepare values to write
    var rowValues = [
      new Date(),                 // Timestamp
      registrationId,            // Reg ID
      requestData.fullName,       // Nama
      requestData.gender,         // Jenis Kelamin
      requestData.birthPlace + ', ' + requestData.birthDate, // TTL
      requestData.address,        // Alamat
      requestData.fatherName,     // Nama Ayah
      requestData.motherName,     // Nama Ibu
      requestData.guardianPhone,  // Nomor HP
      requestData.email,          // Email
      requestData.prevSchool,     // Asal Sekolah
      requestData.schoolLevel,    // Jenjang Pilihan
      requestData.photoUrl,       // Foto
      requestData.familyCardUrl,  // KK
      requestData.birthCertUrl,   // Akta
      requestData.reportCardUrl   // Rapor
    ];
    
    // Append to sheet
    sheet.appendRow(rowValues);
    
    // Return success
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Pendaftaran berhasil disimpan ke spreadsheet!',
      registrationId: registrationId
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: 'Error: ' + error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Support pre-flight OPTIONS request
function doOptions(e) {
  return ContentService.createTextOutput('')
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeader('Access-Control-Allow-Origin', '*')
    .setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
    .setHeader('Access-Control-Allow-Headers', 'Content-Type');
}
