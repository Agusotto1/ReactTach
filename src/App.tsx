
import './App.css'
import { Clientes } from './assets/components/clientes'
import { Counter } from './assets/components/counter'
import { Hooksapp } from './assets/components/Hooksapp'
import { Landing } from './assets/components/landing'
import { SimpleForm } from './assets/components/simpleform'
import { Temporizador } from './assets/components/temporizador'
import { BasicFunctions, LoginPage, ObjectLiterals } from './typescript'
import { Basic } from './typescript/basic'


function App() {
  
  const headerTitle : string = "Esto se paso por props";
  const initialName : string = "Registrar cuenta";


  return (
    <main>      
      <Landing></Landing>
      
    </main>
  );
}

export default App
