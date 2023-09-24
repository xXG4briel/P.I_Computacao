import { Switch, Route } from "react-router-dom";
import Converter from "./converter";
import TruthTable from "./truth-table";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact />
      <Route path="/truth-table" component={TruthTable} />
      <Route path="/converter" component={Converter} />
    </Switch>
  );
}

function P() {
  return <p>teste</p>;
}
