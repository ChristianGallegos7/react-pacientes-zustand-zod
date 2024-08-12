import { useForm } from 'react-hook-form'
import { Input } from '@headlessui/react'
import Error from './Error'

export default function PatientForm() {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = data => {
        console.log(data)
    }

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-2xl rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Registro de Paciente</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Nombre del paciente
                    </label>
                    <Input
                        type="text"
                        placeholder="Nombre del paciente"
                        id="name"
                        {...register('name', { required: 'El nombre del paciente es obligatorio' })}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.name && <Error>{errors.name?.message?.toString()}</Error>}
                </div>

                <div>
                    <label htmlFor="owner" className="block text-sm font-medium text-gray-700">
                        Propietario
                    </label>
                    <Input
                        type="text"
                        placeholder="Nombre del propietario"
                        id="owner"
                        {...register('owner', { required: 'El nombre del dueño es obligatorio' })}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.owner && <Error>{errors.owner?.message?.toString()}</Error>}
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <Input
                        type="email"
                        placeholder="Correo electrónico"
                        id="email"
                        {...register('email', {
                            required: 'El email es obligatorio',
                            pattern: {
                                value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                                message: 'Email no válido'
                            }
                        })}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.email && <Error>{errors.email?.message?.toString()}</Error>}
                </div>

                <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                        Fecha de alta
                    </label>
                    <Input
                        type="date"
                        id="date"
                        {...register('date', { required: 'La fecha de alta es obligatorio' })}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.date && <Error>{errors.date?.message?.toString()}</Error>}
                </div>

                <div>
                    <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700">
                        Síntomas
                    </label>
                    <Input
                        type="text"
                        placeholder="Describa los síntomas"
                        id="symptoms"
                        {...register('symptoms', { required: 'Los sintomas son obligatorios' })}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.symptoms && <Error>{errors.symptoms?.message?.toString()}</Error>}
                </div>

                <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Enviar
                </button>
            </form>
        </div>
    )
}
