export interface ContactEmailData {
  name: string
  email: string
  subject: string
  message: string
  receivedAt: Date
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

const FONT = "'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif"
const MONO = "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace"

/**
 * Dark, futuristic notification email matching the portfolio design.
 * Table-based with inline styles so it renders in Gmail, Outlook and mobile clients.
 */
export function renderContactEmail(data: ContactEmailData) {
  const name = escapeHtml(data.name)
  const email = escapeHtml(data.email)
  const subject = escapeHtml(data.subject)
  const message = escapeHtml(data.message).replace(/\r?\n/g, "<br />")
  const initial = escapeHtml(data.name.charAt(0).toUpperCase() || "?")
  const when = data.receivedAt.toLocaleString("en-GB", {
    timeZone: "Asia/Karachi",
    dateStyle: "medium",
    timeStyle: "short",
  })
  const replyHref = `mailto:${encodeURIComponent(data.email)}?subject=${encodeURIComponent(`Re: ${data.subject}`)}`

  const label = (text: string) =>
    `<div style="font-family:${MONO};font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#c8f526;margin:0 0 8px;">// ${text}</div>`

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="color-scheme" content="dark" />
<meta name="supported-color-schemes" content="dark" />
<title>New message from ${name}</title>
</head>
<body style="margin:0;padding:0;background-color:#0b0a09;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${name}: ${subject}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#0b0a09;">
  <tr>
    <td align="center" style="padding:32px 12px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;">

        <!-- Brand row -->
        <tr>
          <td style="padding:0 4px 16px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="font-family:${FONT};font-size:15px;font-weight:700;color:#ffffff;">
                  <span style="display:inline-block;width:28px;height:28px;line-height:28px;text-align:center;border:1px solid #c8f526;border-radius:8px;color:#c8f526;font-family:${MONO};font-size:13px;margin-right:8px;">M</span>malik<span style="color:#c8f526;">.</span>dev
                </td>
                <td align="right" style="font-family:${MONO};font-size:11px;color:#d9ff4d;letter-spacing:1px;">
                  &#9679; INCOMING
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Card -->
        <tr>
          <td style="background-color:#121110;border:1px solid #2a2723;border-radius:16px;overflow:hidden;">

            <!-- Gradient bar -->
            <div style="height:4px;line-height:4px;font-size:0;background-color:#c8f526;background-image:linear-gradient(90deg,#d9ff4d,#c8f526,#ff6a3d);">&nbsp;</div>

            <!-- Header -->
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="padding:28px 28px 8px;">
                  <div style="font-family:${MONO};font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#71717a;">New transmission &middot; Portfolio contact form</div>
                  <h1 style="margin:10px 0 0;font-family:${FONT};font-size:24px;line-height:1.3;font-weight:700;color:#ffffff;">${subject}</h1>
                </td>
              </tr>
            </table>

            <!-- Sender -->
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="padding:20px 28px 0;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#1a1816;border:1px solid #2a2723;border-radius:12px;">
                    <tr>
                      <td width="64" style="padding:16px 0 16px 16px;vertical-align:middle;">
                        <div style="width:44px;height:44px;line-height:44px;border-radius:50%;text-align:center;background-color:#26310a;border:1px solid #c8f526;font-family:${FONT};font-size:18px;font-weight:700;color:#e6ff85;">${initial}</div>
                      </td>
                      <td style="padding:16px 16px 16px 4px;vertical-align:middle;">
                        <div style="font-family:${FONT};font-size:16px;font-weight:600;color:#ffffff;">${name}</div>
                        <a href="mailto:${email}" style="font-family:${MONO};font-size:13px;color:#c8f526;text-decoration:none;word-break:break-all;">${email}</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!-- Message -->
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="padding:24px 28px 0;">
                  ${label("message")}
                  <div style="background-color:#1a1816;border:1px solid #2a2723;border-left:3px solid #ff6a3d;border-radius:12px;padding:18px 20px;font-family:${FONT};font-size:15px;line-height:1.7;color:#e4e4e7;word-break:break-word;">${message}</div>
                </td>
              </tr>
            </table>

            <!-- Reply button -->
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="padding:28px 28px 8px;">
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td style="border-radius:999px;background-color:#c8f526;background-image:linear-gradient(90deg,#d9ff4d,#c8f526,#ff6a3d);">
                        <a href="${replyHref}" style="display:inline-block;padding:13px 28px;font-family:${FONT};font-size:14px;font-weight:700;color:#0b0a09;text-decoration:none;border-radius:999px;">Reply to ${name} &rarr;</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!-- Meta -->
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="padding:16px 28px 28px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:1px solid #2a2723;">
                    <tr>
                      <td style="padding-top:16px;font-family:${MONO};font-size:12px;color:#71717a;">
                        Received: <span style="color:#a1a1aa;">${escapeHtml(when)} (PKT)</span>
                      </td>
                      <td align="right" style="padding-top:16px;font-family:${MONO};font-size:12px;color:#71717a;">
                        Tip: just hit <span style="color:#a1a1aa;">Reply</span>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td align="center" style="padding:20px 8px 0;font-family:${MONO};font-size:11px;color:#52525b;letter-spacing:1px;">
            Sent automatically from the contact form on your portfolio.
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`

  const text = [
    `New message from your portfolio`,
    ``,
    `From:    ${data.name} <${data.email}>`,
    `Subject: ${data.subject}`,
    `Received: ${when} (PKT)`,
    ``,
    data.message,
    ``,
    `Reply to this email to respond directly.`,
  ].join("\n")

  return { html, text }
}
