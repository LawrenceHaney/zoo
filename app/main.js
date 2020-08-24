import { alex } from "./modles/alpaca.js";
import { brandon } from "./modles/bat.js";
import { cassidy } from "./modles/condor.js";
import { danny } from "./modles/dolphin.js";
import { elmore } from "./modles/emu.js";
import { frank } from "./modles/fox.js";
import { ginger } from "./modles/goose.js";
import { herbert } from "./modles/hyena.js";
import { igor } from "./modles/impala.js";
import { jeff } from "./modles/jelly.js";
import { karen } from "./modles/kiwi.js";
import { lizz } from "./modles/lion.js";
import { monica } from "./modles/monkey.js";
import { ned } from "./modles/newt.js";
import { odett } from "./modles/otter.js";
import { parry } from "./modles/parrot.js";
import { quinton } from "./modles/quoll.js";
import { ruby } from "./modles/rino.js";
import { sebastion } from "./modles/seal.js";
import { tony } from "./modles/tiger.js";
import { ulric } from "./modles/unbrellabird.js";
import { veronica } from "./modles/vulture.js";
import { wanda } from "./modles/wolf.js";
import { yvonne } from "./modles/yak.js";
import { zach } from "./modles/zebra.js";

let zoo = [alex,
brandon,
cassidy,
danny,
elmore,
frank,
ginger,
herbert,
igor,
jeff,
karen,
lizz,
monica,
ned,
odett,
parry,
quinton,
ruby,
sebastion,
tony,
ulric,
veronica,
wanda,
yvonne,
zach
]

function drawzoo(){
  let template= '<ol>'
  zoo.forEach(e => {
    template +=  '<li>' +e.feed()+'</li>'

    
  }
  );
  template += '</ol>'
  document.getElementById("zoo").innerHTML = template
}

drawzoo()