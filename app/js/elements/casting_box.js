import React from "react";

import { Form } from "./Form";

const Casting = () => {
  return (
    <main>
      <div className="container_casting">
        <div className="main_casting">
          <h1>Casting</h1>
          <p>
            Czy kiedykolwiek słyszałaś, że wyglądasz jak modelka? Czy uważasz,
            że jesteś wyjątkowa i piękna? Jesteśmy rozwijającą się agencją
            modelek z dużymi aspiracjami. Traktujemy każdą z naszych modelek
            indywidualnie i dbamy o rozwój kariery każdej z nich. Nie czekaj,
            daj sobie szansę i aplikuj do Wojto Models.
          </p>
          <p>
            Na wybrane aplikacje odpowiadamy do 48 godzin. Dane pozostałych
            kandydatek są automatycznie usuwane z naszej bazy.
          </p>
        </div>
        <div className="forms">
          <Form />
        </div>
      </div>
    </main>
  );
};

export { Casting };
