/**
 * This file will automatically be loaded by vite and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.ts` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import { Unicode } from "./unicode.ts";
import './index.css';

let editor = document.getElementById("editor");
let paragraph = document.getElementById("paragraph");
let statusLine = document.getElementById("status-line");
let text = "~ " + Unicode.FullBlock;

paragraph.innerText = text;

let isControlPressed = false;
let mode = "Normal";

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "Alt":
      break;
    case "ArrowDown":
      break;
    case "ArrowLeft":
      break;
    case "ArrowRight":
      break;
    case "ArrowUp":
      break;
    case "Backspace":
      text = text.substring(0, text.length - 1);
      break;
    case "CapsLock":
      break;
    case "Control":
      isControlPressed = true;
      break;
    case "Enter":
      text += "\n";
      text += "~ ";
      break;
    case "Escape":
      break;
    case "l":
      if (isControlPressed) {
        text = "~ ";
      } else {
        text += event.key;
      }
      break;
    case "Meta":
      break;
    case "Shift":
      break;
    case "Tab":
      text += "\t";
      break;
    default:
      text += event.key;
      break;
  }

  if (paragraph.innerText !== text) {
    paragraph.innerText = text;
  }
});

window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "Control":
      isControlPressed = false;
      break;
  }
});
