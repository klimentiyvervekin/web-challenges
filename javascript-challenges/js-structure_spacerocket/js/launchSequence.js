// Implement the launch sequence function here and export it as the default export.
// launchSequence.js
import { loadPayload } from "./core/load.js";
import { fuel } from "./core/fuel.js";
import { countdown } from "./core/countdown.js";
import { liftoff } from "./core/liftoff.js";
import { deployPayload } from "./core/deploy.js";

const COUNTDOWN_LENGTH = 5;

function launch() {
  loadPayload(satellites);

  fuel();

  for (let i = 0; i < COUNTDOWN_LENGTH; i++) {
    countdown();
  }

  liftoff();

  deployPayload();
}

export default launch;