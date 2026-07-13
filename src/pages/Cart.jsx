export default function Cart() {
  return (
    <section className="p-10 flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-100">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-lg w-full text-center border border-purple-100">
        
        {/* Título */}
        <h1 className="text-4xl font-extrabold text-purple-700 mb-6">
          🛒 Carrito de Compras
        </h1>
        
        <p className="text-gray-600 mb-8">
          Revisa tus productos y selecciona tu método de pago preferido.
        </p>

        {/* Opciones de pago */}
        <div className="space-y-4">
          <button
            className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center gap-2"
            onClick={() =>
              (window.location.href =
                "https://recarga.nequi.com.co/bdigitalps/pb/transaction/login")
            }
          >
            💳 Pagar con Nequi
          </button>

          <button
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center gap-2"
            onClick={() =>
              (window.location.href =
                "https://www.bancolombia.com/personas/transacciones")
            }
          >
            🏦 Pagar con Bancolombia
          </button>

          <button
            className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center gap-2"
            onClick={() =>
              (window.location.href =
                "https://www.davivienda.com/wps/portal/personas")
            }
          >
            🏦 Pagar con Davivienda
          </button>

          <button
            className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center gap-2"
            onClick={() =>
              (window.location.href =
                "https://www.visa.com.co/pagar")
            }
          >
            💳 Tarjeta Crédito / Débito
          </button>
        </div>
      </div>
    </section>
  );
}
