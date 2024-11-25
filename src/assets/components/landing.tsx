import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import backgroundImage from '../img/background.jpg';
import { Cliente } from '../models/cliente';
import { Provincia } from '../models/provincia';
import { guardarClienteAPI } from '../services/clienteService';

export const Landing = () => {
    const [visible, setVisible] = useState(false);
    const [nuevoCliente, setNuevoCliente] = useState<Cliente>({
        nombre: '',
        apellido: '',
        telefono: '',
        mail: '',
        domicilio: '',
        provincia: { name: '', code: '' },
    });
    const [selectedCity, setSelectedCity] = useState<Provincia | null>(null);
    const [isSaving, setIsSaving] = useState(false);

    const cities: Provincia[] = [
        { name: 'Cordoba', code: 'CBA' },
        { name: 'Buenos Aires', code: 'BSAS' },
        { name: 'Santa Fe', code: 'SF' },
        { name: 'Neuquen', code: 'NQN' },
        { name: 'Tucuman', code: 'TCM' },
    ];

    const abrirModal = () => setVisible(true);
    const cerrarModal = () => {
        setNuevoCliente({
            nombre: '',
            apellido: '',
            telefono: '',
            mail: '',
            domicilio: '',
            provincia: { name: '', code: '' },
        });
        setSelectedCity(null);
        setVisible(false);
    };

    const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNuevoCliente((prev) => ({ ...prev, [name]: value }));
    };

    const manejarCambioDropdown = (e: { value: Provincia }) => {
        setSelectedCity(e.value);
        setNuevoCliente((prev) => ({ ...prev, provincia: e.value }));
    };

    const guardarCliente = async () => {
        const clienteAGuardar: Cliente = {
            ...nuevoCliente,
            provincia: selectedCity || { name: '', code: '' },
        };

        setIsSaving(true);
        try {
            const response = await guardarClienteAPI(clienteAGuardar);
            alert(`Cliente guardado con éxito: ID ${response.id}`);
            cerrarModal();
        } catch (error) {
            alert('Error al guardar el cliente. Por favor, intenta nuevamente.');
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div
            className="container-fluid text-center"
            style={{
                height: '100vh',
                alignItems: 'center',
                paddingTop: '30vh',
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div
                className="card mx-auto"
                id="custom-card"
                style={{
                    maxWidth: '1000px',
                    height: '19vh',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                    borderRadius: '10px',
                }}
            >
                <div className="card-header">
                    <h1>Registro clientes</h1>
                </div>
                <div className="card-body">
                    <div className="row p-4">
                        <div className="col-12">
                            <Button
                                label="Registrar nuevo cliente"
                                style={{ borderRadius: '5px' }}
                                onClick={abrirModal}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Dialog
                header="Registre un nuevo cliente"
                visible={visible}
                onHide={cerrarModal}
                style={{ width: '50%', height: '70%' }}
                footer={
                    <div style={{ textAlign: 'center' }}>
                        <Button
                            label={isSaving ? 'Guardando...' : 'Guardar'}
                            style={{ borderRadius: '5px', width: '30%' }}
                            onClick={guardarCliente}
                            disabled={isSaving}
                        />
                    </div>
                }
            >
                <div className="p-fluid">
                    <div className="p-field">
                        <label htmlFor="nombre">Nombre</label>
                        <InputText
                            id="nombre"
                            name="nombre"
                            value={nuevoCliente.nombre}
                            onChange={manejarCambio}
                        />
                    </div>
                    <div className="p-field">
                        <label htmlFor="apellido">Apellido</label>
                        <InputText
                            id="apellido"
                            name="apellido"
                            value={nuevoCliente.apellido}
                            onChange={manejarCambio}
                        />
                    </div>
                    <div className="p-field">
                        <label htmlFor="telefono">Teléfono</label>
                        <InputText
                            id="telefono"
                            name="telefono"
                            value={nuevoCliente.telefono}
                            onChange={manejarCambio}
                        />
                    </div>
                    <div className="p-field">
                        <label htmlFor="mail">Correo Electrónico</label>
                        <InputText
                            id="mail"
                            name="mail"
                            value={nuevoCliente.mail}
                            onChange={manejarCambio}
                        />
                    </div>
                    <div className="p-field">
                        <label htmlFor="domicilio">Domicilio</label>
                        <InputText
                            id="domicilio"
                            name="domicilio"
                            value={nuevoCliente.domicilio}
                            onChange={manejarCambio}
                        />
                    </div>
                    <div className="p-field">
                        <label htmlFor="provincia">Provincia</label>
                        <Dropdown
                            id="provincia"
                            value={selectedCity}
                            options={cities}
                            onChange={manejarCambioDropdown}
                            optionLabel="name"
                            placeholder="Seleccione una provincia"
                        />
                    </div>
                </div>
            </Dialog>
        </div>
    );
};
