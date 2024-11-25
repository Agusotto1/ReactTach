import React, { useState } from 'react';
import { Button } from 'primereact/button'; // Importa el componente
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { FloatLabel } from 'primereact/floatlabel';
import { Card } from 'primereact/card';

import './clientes.css'


export function Clientes({ headerTitle, initialName }) {

  //abrirModal : boolean  = false;

  const [visible, setVisible] = useState(false);


  function abrirModal() {
    setVisible(true);
  }

  // Función normal para cerrar el modal
  function cerrarModal() {
    setVisible(false);
  }

  //el hook useState funciona asi:
  //defino variable (que seria name), defino el metodo (que seria setName), inicializo la variable (useState(''));
  //despues llamo al metodo setName setName('pedro');
  const [name, setName] = useState('');
  const [apellido, setApellido] = useState('');
  const [domicilio, setDomicilio] = useState('');
  const [telefono, setTelefono] = useState('');


  // const header = (
  //   <img alt="Card" src="https://clipground.com/images/white-profile-icon-clipart-2.png" />
  // );

  const renderHeader = (url: string | undefined) => (
    <img alt="Card" src={url}  />
  );

  const footer = (
    <>
      <Button label="Login" severity="info" icon="pi pi-check" raised style={{  borderRadius: "5px"}} />
    </>
  );

  const header1 = (
      <img style={{'width': '85%'}} alt="Card" src="https://static.vecteezy.com/system/resources/previews/002/285/329/non_2x/line-icon-for-balance-check-vector.jpg" />
  )

  const footer1 = (
    <>
      <Button label="Balance" severity="secondary" icon="pi pi-check" raised style={{  borderRadius: "5px"}} />
    </>
  );



  function guardarDatos() {

    alert(name + ' ' + apellido + ' ' + domicilio);
    setName('');
    setApellido('');
    setDomicilio('');
    setTelefono('');
  }

  return (
    <>
      <div className="body text-center p-3" style={{ height: "70vh" }}>
        <div className="card">
          <div className="card-header p-3" style={{ borderBottom: "none" }}>
          <h1>{headerTitle}</h1> 
          </div>
          <div className="card-body p-3">
            <div className="row d-flex justify-content-center align-items-center" style={{ textAlign: "center" }}>
              <div className="col-md-auto mb-3">
                <Button
                  className="mb-3"
                  raised
                  style={{ borderRadius: "5px", width: "250px" }}
                  label={initialName}
                  icon="pi pi-external-link" onClick={abrirModal}
                // Para PrimeReact, "raised" no existe, pero puedes simularlo con clases personalizadas
                />
              </div>
              <div className="col-md-auto mb-3">
                <Button
                  raised
                  className="mb-3"
                  style={{ borderRadius: "5px", width: "250px" }}
                  label="Ver cuentas registradas"
                  severity="secondary" // Este es el equivalente para el "severity" de PrimeReact
                />
              </div>
            </div>
            <div className='row p-3'>
              <div className='col-2' style={{ marginRight: '10 px' }}>
              <Card title="Ingresa a tu cuenta" className='pt-3'  footer={footer} header={renderHeader('https://clipground.com/images/white-profile-icon-clipart-2.png')} style={{width: '300px'}}>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, 
                </p>
              </Card>
              </div>
              <div className='col-2' style={{ marginRight: '10 px' }}>
              <Card title="Consulta Saldo" className='pt-3'  footer={footer1} header={header1} style={{width: '300px'}}>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, 
                </p>
              </Card>
              </div>
              
            </div>
          </div>
        </div>
        <div className='row p-3'>

        </div>
      </div>

      <div className='row p-3'>
        <Dialog header="Título del Modal" visible={visible} onHide={cerrarModal} style={{ width: '50%', height: '50%' }}>
          <div className='card'>
            <div className='row p-3'>
              <div className='col-12 align-items-center justify-content-center' style={{ textAlign: "center" }}>
                <h4>Registre una nueva causa</h4>
              </div>
              <div className='col-3 p-3'>
                <FloatLabel>
                  <InputText
                    type="text"
                    placeholder="Nombre"
                    name='inputNombre'
                    value={name} // Asocia el valor al estado
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label htmlFor="inputNombre">Ingrese un nombre</label>
                </FloatLabel>
              </div>
              <div className='col-3 p-3'>
                <FloatLabel>
                  <InputText
                    type="text"
                    placeholder="Apellido"
                    name='inputApellido'
                    value={apellido} // Asocia el valor al estado
                    onChange={(e) => setApellido(e.target.value)}
                  />
                  <label htmlFor="inputApellido">Ingrese un apellido</label>
                </FloatLabel>
              </div>
              <div className='col-3 p-3'>
                <FloatLabel>
                  <InputText
                    type="text"
                    placeholder="Domicilio"
                    name='inputDomicilio'
                    value={domicilio} // Asocia el valor al estado
                    onChange={(e) => setDomicilio(e.target.value)}
                  />
                  <label htmlFor="inputApellido">Ingrese un apellido</label>
                </FloatLabel>
              </div>
              <div className='col-3 p-3'>
                <FloatLabel>
                  <InputText
                    type="text"
                    placeholder="Telefono"
                    name='inputTelefono'
                    value={telefono} // Asocia el valor al estado
                    onChange={(e) => setTelefono(e.target.value)}
                  />
                  <label htmlFor="inputApellido">Ingrese un apellido</label>
                </FloatLabel>
              </div>
              <div className='col-12 p-3' style={{ textAlign: "center" }}>
                <Button
                  raised
                  style={{ borderRadius: "5px" }}
                  onClick={guardarDatos}>Guardar
                </Button>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    </>
  );
}
