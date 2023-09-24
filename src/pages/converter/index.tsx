import { useRef, useState } from "react";
import { Container } from "./styles";

export default function Converter() {
  const types: any = {
    decimal: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    hexadecimal: [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ],
    octal: ["0", "1", "2", "3", "4", "5", "6", "7"],
    binary: ["0", "1"],
  };

  const [result, setResult] = useState<string>("");
  const [outResult, setOutResult] = useState<string>("");

  const [inputType, setInputType] = useState<string>("decimal");
  const [outType, setOutType] = useState<string>("binary");

  function validate(e: any) {
    const key = e?.target?.value;

    setResult(key);
    converter(key);

    // if (lastKey && !types[inputType].includes(lastKey)) {
    //   alert("Não existe");
    // } else {
    // }
  }

  function converter(input: any) {
    let result = '';

    if (inputType == 'decimal') {
      const base = types[outType].length;
      result = (parseInt(input)).toString(base);
    }
    else {
      const base = types[outType].length;
      const baseDecimal = (parseInt(input, base));
      
      if (outType == 'decimal') {
        result = baseDecimal.toString();
      }
      else {
        result = (baseDecimal).toString(base);
      }
    }
    setOutResult(result);
  }

  function handleInputType(e: any) {
    setInputType(e.target.value);
  }
  function handleOutType(e: any) {
    setOutType(e.target.value);
  }

  return (
    <Container>
      <div>
        <label>
          de
          <select name="" id="" value={inputType} onChange={handleInputType}>
            <option value="">Decimal</option>
          </select>
        </label>
        <label>
          Para
          <select name="" id="">
            <option value="">Binário</option>
          </select>
        </label>
      </div>

      <div style={{ display: "block" }}>
        <label>
          Entrada:
          <input type="text" id="value" onChange={validate} value={result} />
        </label>
        <label>
          Saída:
          <input type="text" id="value" disabled value={outResult} />
        </label>
      </div>
    </Container>
  );
}
