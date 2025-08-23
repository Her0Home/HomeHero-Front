'use client'

import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'

const barriosCABA = [
  'Almagro', 'Balvanera', 'Barracas', 'Belgrano', 'Boedo', 'Caballito', 'Chacarita', 'Coghlan',
  'Colegiales', 'Constitución', 'Flores', 'Floresta', 'La Boca', 'La Paternal', 'Liniers',
  'Mataderos', 'Monserrat', 'Monte Castro', 'Nueva Pompeya', 'Núñez', 'Palermo', 'Parque Avellaneda',
  'Parque Chacabuco', 'Parque Patricios', 'Puerto Madero', 'Recoleta', 'Retiro', 'Saavedra',
  'San Cristóbal', 'San Nicolás', 'San Telmo', 'Vélez Sársfield', 'Versalles', 'Villa Crespo',
  'Villa del Parque', 'Villa Devoto', 'Villa General Mitre', 'Villa Lugano', 'Villa Luro',
  'Villa Ortúzar', 'Villa Pueyrredón', 'Villa Real', 'Villa Riachuelo', 'Villa Santa Rita',
  'Villa Soldati', 'Villa Urquiza'
]



const validationSchema = Yup.object({
  phone: Yup.string().matches(/^\d{10,15}$/, 'Teléfono inválido').required('Este campo es obligatorio'),
  documentId: Yup.string().required('Este campo es obligatorio'),
  city: Yup.string().required('Este campo es obligatorio'),
  street: Yup.string().required('Este campo es obligatorio'),
  number: Yup.string().required('Este campo es obligatorio'),
})

const initialValues = {
  phone: '',
  documentId: '',
  city: '',         // barrio (zona de CABA)
  street: '',       // nueva: nombre de la calle
  number: '',       // nueva: altura
}
 export  const FormClient = () => {
  return (<>
  <h1 className="mb-6 text-4xl font-bold text-gray-800">Edición del Perfil</h1>
  
        <Card className="w-full max-w-2xl shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl">Formulario de Verificación Profesional</CardTitle>
            <CardDescription>Completá tus datos para verificar tu perfil</CardDescription>
          </CardHeader>
  
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => console.log('Datos enviados:', values)}
          >
            {({ values, setFieldValue, isSubmitting }) => (
              <Form>
                <CardContent className="space-y-6">
                  {/* Teléfono */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium">Teléfono</label>
                    <Field name="phone" as={Input} />
                    <ErrorMessage name="phone" component="p" className="mt-1 text-sm text-red-500" />
                  </div>
  
                  {/* Fecha de nacimiento */}
                  <div>
                    <label htmlFor="birthdate" className="block text-sm font-medium">Fecha de nacimiento</label>
                    <Field name="birthdate" type="date" as={Input} />
                    <ErrorMessage name="birthdate" component="p" className="mt-1 text-sm text-red-500" />
                  </div>
  
                  {/* DNI */}
                  <div>
                    <label htmlFor="documentId" className="block text-sm font-medium">DNI / Identificación</label>
                    <Field name="documentId" as={Input} />
                    <ErrorMessage name="documentId" component="p" className="mt-1 text-sm text-red-500" />
                  </div>

  
                {/* Zona (Barrio) */}
  <div>
    <label className="block mb-1 text-sm font-medium">Zona de trabajo (CABA)</label>
    <Select onValueChange={(val) => setFieldValue('city', val)}>
      <SelectTrigger>
        <SelectValue placeholder="Selecciona tu barrio" />
      </SelectTrigger>
      <SelectContent>
        {barriosCABA.map((barrio) => (
          <SelectItem key={barrio} value={barrio}>
            {barrio}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
    <ErrorMessage name="city" component="p" className="mt-1 text-sm text-red-500" />
  </div>
  
  {/* Calle */}
  <div className="mt-4">
    <label htmlFor="street" className="block text-sm font-medium">Calle</label>
    <Field
      name="street"
      as={Input}
      placeholder="Ej. Av. Córdoba"
    />
    <ErrorMessage name="street" component="p" className="mt-1 text-sm text-red-500" />
  </div>
  
  {/* Altura */}
  <div className="mt-4">
    <label htmlFor="number" className="block text-sm font-medium">Altura</label>
    <Field
      name="number"
      as={Input}
      type="number"
      placeholder="Ej. 2450"
    />
    <ErrorMessage name="number" component="p" className="mt-1 text-sm text-red-500" />
  </div>
  
                </CardContent>
  
                <CardFooter>
                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    Registrarme
                  </Button>
                </CardFooter>
              </Form>
            )}
          </Formik>
        </Card>
  </>
   )
}