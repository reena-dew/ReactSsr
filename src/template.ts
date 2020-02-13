
export function template(title: string, content: string, initialData: any) {

  const clientScript =  `<script>window.initialData = ${JSON.stringify(initialData)}</script><script src="/client.js" defer></script>`;
  // const reloadScript = process.env.environment === "development" ? `<script src="/reload/reload.js"></script>` : "";

  let scripts = content ? `${clientScript}` : `<script> </script>`;
  

    const page = `<!DOCTYPE html>
                <html lang="en">
                <head>
                  <meta charset="utf-8">
                  <title>${title}</title>
                  <link rel="shortcut icon" href="/assets/favicon.ico">
                </head>
                <body>
                  <div class="content">
                     <div id="app" class="wrap-inner">
                       ${content}
                     </div>
                  </div>
                  ${scripts}
                </body>
                `;

    return page;
}
