# Close and reopen pinned tabs chrome extension
This extension is a workaround for an annoying issue with chromium-based web browsers. The issue occurs only when you set your browser to autostart with the system. When the browser auto-starts (at least in Linux) all the pinned tabs are blank and showing an endless spinning circle (see the last screenshot) and they will never load the pinned page (actually even the user-defined pages won't load either. The only solution is either to reload them manually if you are lucky and the URL is still there, if not, then you would need to manually enter the url in every single pinned tab, now imagine you have a dozen of those? It's very frustrating and unreliable behavior. That's why i created this extension to always have a quick and reliable way to reload all your pinned tabs.

# How it works
User has to manually specify a list of URLs that will be stored in the browser storage and when the extension is activated (left click on the icon) it will close all the currently opened tabs (including the pinned tabs) except the currently active tab and it will open all the user-defined URLs as pinned tabs.

### It's available now as an official Chrome Extension:
https://chromewebstore.google.com/detail/close-and-reopen-urls-as/nmefnnbmgimpgjiiijgflnjafmobopko

# Installation/Usage
 1. Unpack the archive.
 2. Open Chrome → chrome://extensions/
 3. Enable Developer mode.
 4. Click Load unpacked
 5. Load te unarchived folder 'close-and-reopen-pinned' (which is inside the unpacked archive folder).
 6. Click on extensions (screenshot 1)
 7. Click on Options.
 8. Type your favorite web sites URLs (screenshot 2)
 9. Click on 'Save'
### Note before doing the step 10! Once you left click on the extension it will close all your currently opened tabs except the active one!
 10. Click on extensions again and left click on extension name and it will open all your favorite URLs as pinned (screenshot 3)

# Screenshots

![Alt text](https://github.com/DiogenesN/Close-and-reopen-pinned-tab-chrome-extension/blob/main/1.png)
![Alt text](https://github.com/DiogenesN/Close-and-reopen-pinned-tab-chrome-extension/blob/main/2.png)
![Alt text](https://github.com/DiogenesN/Close-and-reopen-pinned-tab-chrome-extension/blob/main/3.png)
![Alt text](https://github.com/DiogenesN/Close-and-reopen-pinned-tab-chrome-extension/blob/main/4.png)

# The issue
![Alt text](https://github.com/DiogenesN/Close-and-reopen-pinned-tab-chrome-extension/blob/main/5.png)

# Support

   My Libera IRC support channel: #linuxfriends
   
   Email: nicolas.dio@protonmail.com

