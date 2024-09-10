import React from "react";

import list1 from "../img/structur/24Ю-о-11.pdf";
import list2 from "../img/structur/23Ю-о-21.pdf";
import list3 from "../img/structur/22Ю-о-31.pdf";
import list4 from "../img/structur/24ГПм-о-11.pdf";
import list5 from "../img/structur/23ГПм-о-21.pdf";
import list6 from "../img/structur/24СЭ-о-11.pdf";
import list7 from "../img/structur/23СЭ-о-21.pdf";
import list8 from "../img/structur/22СЭ-о-31.pdf";
import list9 from "../img/structur/21Ю-о-41.pdf";
import list10 from "../img/structur/21СЭ-о-41.pdf";
import list11 from "../img/structur/20СЭ-о-51.pdf";
import list12 from "../img/structur/21Ю-оз-41.pdf";
import list13 from "../img/structur/23Ю-оз-21.pdf";

const doc1 = list1;
const doc2 = list2;
const doc3 = list3;
const doc4 = list4;
const doc5 = list5;
const doc6 = list6;
const doc7 = list7;
const doc8 = list8;
const doc9 = list9;
const doc10 = list10;
const doc11 = list11;
const doc12 = list12;
const doc13 = list13;

export function Structur() {
  return (
    <div className="main-page main-container structur">
      <div>
        <h3>Группа 24Ю-о-11</h3>
        <embed type="application/pdf" src={`${doc1}`} />
      </div>
      <div>
        <h3>Группа 23Ю-о-21</h3>
        <embed type="application/pdf" src={`${doc2}`} />
      </div>
      <div>
        <h3>Группа 22Ю-о-31</h3>
        <embed type="application/pdf" src={`${doc3}`} />
      </div>
      <div>
        <h3>Группа 24ГПм-о-11</h3>
        <embed type="application/pdf" src={`${doc4}`} />
      </div>
      <div>
        <h3>Группа 23ГПм-о-21</h3>
        <embed type="application/pdf" src={`${doc5}`} />
      </div>
      <div>
        <h3>Группа 24СЭ-о-11</h3>
        <embed type="application/pdf" src={`${doc6}`} />
      </div>
      <div>
        <h3>Группа 23СЭ-о-21</h3>
        <embed type="application/pdf" src={`${doc7}`} />
      </div>

      <div>
        <h3>Группа 22СЭ-о-31</h3>
        <embed type="application/pdf" src={`${doc8}`} />
      </div>
      <div>
        <h3>Группа 21Ю-о-41</h3>
        <embed type="application/pdf" src={`${doc9}`} />
      </div>
      <div>
        <h3>Группа 21СЭ-о-41</h3>
        <embed type="application/pdf" src={`${doc10}`} />
      </div>
      <div>
        <h3>Группа 20СЭ-о-51</h3>
        <embed type="application/pdf" src={`${doc11}`} />
      </div>
      <div>
        <h3>Группа 21Ю-оз-41</h3>
        <embed type="application/pdf" src={`${doc12}`} />
      </div>
      <div>
        <h3>Группа 23Ю-оз-21</h3>
        <embed type="application/pdf" src={`${doc13}`} />
      </div>
    </div>
  );
}
