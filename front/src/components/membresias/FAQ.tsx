
 
const PreguntasPro= () => {
  return ( 
  <div className="p-8 mb-12 bg-gray-100 rounded-lg">
    <h3 className="mb-8 text-2xl font-bold text-center text-gray-900 font-Title">Preguntas Frecuentes</h3>

    <div className="grid gap-8 md:grid-cols-2">
      <div className="space-y-6">
        <div>
          <h4 className="mb-2 font-semibold text-gray-900">¿Puedo cambiar de plan en cualquier momento?</h4>
          <p className="text-sm text-gray-600 font-Text">
            Sí, puedes actualizar o degradar tu plan en cualquier momento. Los cambios se reflejarán en tu próximo
            ciclo de facturación.
          </p>
        </div>

        <div>
          <h4 className="mb-2 font-semibold text-gray-900">¿Hay algún contrato o compromiso a largo plazo?</h4>
          <p className="text-sm text-gray-600 font-Text">
            No, todos nuestros planes son sin compromiso. Puedes cancelar tu suscripción en cualquier momento. Pero no se te devolverá el dinero de los días no utilizados.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="mb-2 font-semibold text-gray-900">¿Qué métodos de pago aceptan?</h4>
          <p className="text-sm text-gray-600 font-Text">
            Aceptamos todas las tarjetas de crédito principales, PayPal y transferencias bancarias.
          </p>
        </div>

        <div>
          <h4 className="mb-2 font-semibold text-gray-900">¿Hay descuentos para pagos anuales?</h4>
          <p className="text-sm text-gray-600 font-Text">
            Sí, al pagar anualmente obtienes hasta un 31% de descuento comparado con el pago mensual.
          </p>
        </div>
      </div>
    </div>
  </div> 
  );
}
 
export default PreguntasPro;