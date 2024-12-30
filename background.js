browser.contextMenus.create({
    id: "create-qr-current-url",
    title: "Create QR of Current Page URL",
    contexts: ["page"]
  });
  
  browser.contextMenus.create({
    id: "create-qr-copied-url",
    title: "Create QR of Copied URL",
    contexts: ["page"]
  });
  
  browser.contextMenus.onClicked.addListener(async (info, tab) => {
    let url = "";
    if (info.menuItemId === "create-qr-current-url") {
      url = tab.url;
    } else if (info.menuItemId === "create-qr-copied-url") {
      const text = await navigator.clipboard.readText();
      if (text.startsWith("http")) url = text;
      else alert("Copied text is not a valid URL!");
    }
  
    if (url) {
      browser.windows.create({
        url: `popup.html?url=${encodeURIComponent(url)}`,
        type: "popup",
        width: 400,
        height: 400
      });
    }
  });
  