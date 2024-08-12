import PatientForm from "./components/PatientForm"
import PatientsList from "./components/PatientsList"

function App() {

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-indigo-600 text-3xl font-bold text-center my-8">Administración de Pacientes</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 lg:w-2/5">
          <PatientForm />
        </div>

        <div className="md:w-1/2 lg:w-3/5">
          <PatientsList />
        </div>
      </div>
    </div>
  )
}

export default App
