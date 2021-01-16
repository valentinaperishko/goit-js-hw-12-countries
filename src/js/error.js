import PNotify from "@pnotify/core/dist/PNotify.js";
import "@pnotify/core/dist/BrightTheme.css";

export default function errorNotify(text) {
  PNotify.error({
    text: text,
    delay: 2000,
  });
}
