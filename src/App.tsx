import { MapTrifold } from "@phosphor-icons/react";
import "./app.css";
import { Logo } from "./components/logo";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <header className="">
        <div className=" flex flex-row bg-neutrals25 ">
          <Logo />
          <Button variant="default" size="lg" className=" rounded-xs">
            default
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="text-white rounded-xs "
          >
            secondary
          </Button>
          <Button variant="destructive" size="lg" className=" rounded-xs">
            destructive
          </Button>
          <Button variant="ghost" size="lg" className=" rounded-xs">
            <MapTrifold size={32} />
            ghost
          </Button>
          <Button variant="link" size="lg" className=" rounded-xs">
            link
          </Button>
          <Button variant="outline" size="lg" className=" rounded-xs">
            outiline
          </Button>
        </div>
      </header>
      <div className="container leading-base text-primary font-bold  ">
        asdf
      </div>
    </>
  );
}

export default App;
