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

import { Button } from '@/components/ui/button'

interface FormValues {
  phone: string;
  documentId: string;
  category: string;
  subcategory: string[];
  city: string;
  street: string;
  number: string;
  birthdate?: string;
}

const subcategoriesMap: Record<string, string[]> = {
  electricista: [
    'Instalación de luminarias',
    'Reparación de cortocircuitos',
    'Tableros eléctricos',
    'Certificados de seguridad',
    'Instalación de tomas y llaves',
    'Cableado estructurado',
    'Automatización de portones',
    'Medición de consumo eléctrico',
  ],
  plomero: [
    'Reparación de cañerías',
    'Instalación de sanitarios',
    'Detección de fugas',
    'Desobstrucción de cloacas',
    'Instalación de calefones',
    'Cambio de grifería',
    'Reparación de pérdidas',
    'Instalación de bombas de agua',
  ],
  limpieza: [
    'Limpieza profunda de hogar',
    'Limpieza de oficinas',
    'Limpieza post obra',
    'Lavado de alfombras',
    'Desinfección de ambientes',
    'Limpieza de vidrios',
    'Limpieza de cocinas industriales',
    'Limpieza de tapizados',
  ],
  mascotas: [
    'Paseos diarios',
    'Cuidado en domicilio',
    'Transporte a veterinario',
    'Entrenamiento básico',
    'Baño y cepillado',
    'Cuidado nocturno',
    'Socialización guiada',
    'Entrega de reportes diarios',
  ],
  pintor: [
    'Pintura interior',
    'Pintura exterior',
    'Impermeabilización',
    'Aplicación de texturas',
    'Pintura decorativa',
    'Reparación de grietas',
    'Lijado y preparación de superficies',
    'Pintura de muebles',
  ],
  jardineria: [
    'Corte de césped',
    'Poda de árboles',
    'Diseño de jardines',
    'Mantenimiento de plantas',
    'Instalación de riego automático',
    'Control de plagas',
    'Fertilización',
    'Limpieza de espacios verdes',
  ],
}
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
  fullName: Yup.string().required('Este campo es obligatorio'),
  email: Yup.string().email('Email inválido').required('Este campo es obligatorio'),
  phone: Yup.string().matches(/^\d{10,15}$/, 'Teléfono inválido').required('Este campo es obligatorio'),
  documentId: Yup.string().required('Este campo es obligatorio'),
  category: Yup.string().required('Selecciona un rubro'),
  subcategory: Yup.array().of(Yup.string()).min(4, 'Selecciona al menos 4 servicios'),
  city: Yup.string().required('Este campo es obligatorio'),
  street: Yup.string().required('Este campo es obligatorio'),
  number: Yup.string().required('Este campo es obligatorio'),
  workArea: Yup.string().required('Este campo es obligatorio'),
  availability: Yup.string().required('Selecciona disponibilidad'),
  terms: Yup.boolean().oneOf([true], 'Debes aceptar los términos'),
  birthdate: Yup.string().required('Este campo es obligatorio'),
})


 export  const FormPro = () => {
  return (<>
  
    <h1 className="mb-6 text-4xl font-bold text-hero-black font-Title">Completá tu Perfil</h1>
   <Formik<FormValues>
      initialValues={{
        phone: '',
        documentId: '',
        category: '',
        subcategory: [],
        city: '',
        street: '',
        number: '',
        birthdate: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log('Datos enviados:', values)}
    >
      {({ values, setFieldValue, isSubmitting }) => (
        <Form>
          <Card className="items-center w-full max-w-2xl shadow-lg bg-hero-white">
            <CardHeader className='flex flex-col items-center '>
              <CardTitle className="text-xl font-Title">Formulario de Verificación Profesional</CardTitle>
              <CardDescription className='font-Text'>Completá tus datos para verificar tu perfil</CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              
              {/* Teléfono */}
              <div>
                <label htmlFor="phone">Teléfono</label>
                <Field name="phone" as={Input} />
                <ErrorMessage name="phone" component="p" className="text-sm text-red-500" />
              </div>

              {/* Fecha de nacimiento */}
              <div>
                <label htmlFor="birthdate">Fecha de nacimiento</label>
                <Field name="birthdate" type="date" as={Input} />
                <ErrorMessage name="birthdate" component="p" className="text-sm text-red-500" />
              </div>

              {/* DNI */}
              <div>
                <label htmlFor="documentId">DNI / Identificación</label>
                <Field name="documentId" as={Input} />
                <ErrorMessage name="documentId" component="p" className="text-sm text-red-500" />
              </div>

              {/* Categoría */}
              <div>
                <label>Rubro</label>
                <Select onValueChange={(val) => setFieldValue('category', val)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona tu rubro" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="electricista">Electricista</SelectItem>
                    <SelectItem value="plomero">Plomero</SelectItem>
                    <SelectItem value="limpieza">Limpieza</SelectItem>
                    <SelectItem value="mascotas">Paseo de Mascotas</SelectItem>
                    <SelectItem value="pintor">Pintor</SelectItem>
                    <SelectItem value="jardineria">Jardinería</SelectItem>
                  </SelectContent>
                </Select>
                <ErrorMessage name="category" component="p" className="text-sm text-red-500" />
              </div>

              {/* Subcategorías */}
              {values.category && (
                <div>
                  <label>Servicios específicos (mínimo 4)</label>
                  <div className="grid grid-cols-2 gap-2">
                    {subcategoriesMap[values.category]?.map((item) => (
                      <label key={item} className="flex items-center gap-2 text-sm">
                        <Field
                          type="checkbox"
                          name="subcategory"
                          value={item}
                          checked={values.subcategory.includes(item)}
                        />
                        {item}
                      </label>
                    ))}
                  </div>
                  <ErrorMessage name="subcategory" component="p" className="text-sm text-red-500" />
                </div>
              )}

              {/* Zona de trabajo */}
              <div>
                <label>Barrio (CABA)</label>
                <Select onValueChange={(val) => setFieldValue('city', val)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona tu barrio" />
                  </SelectTrigger>
                  <SelectContent>
                    {barriosCABA.map((barrio) => (
                      <SelectItem key={barrio} value={barrio}>{barrio}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <ErrorMessage name="city" component="p" className="text-sm text-red-500" />
              </div>

              {/* Calle */}
              <div>
                <label htmlFor="street">Calle</label>
                <Field name="street" as={Input} placeholder="Ej. Av. Córdoba" />
                <ErrorMessage name="street" component="p" className="text-sm text-red-500" />
              </div>

              {/* Altura */}
              <div>
                <label htmlFor="number">Altura</label>
                <Field name="number" as={Input} type="number" placeholder="Ej. 2450" />
                <ErrorMessage name="number" component="p" className="text-sm text-red-500" />
              </div>
            </CardContent>

            <CardFooter>
              <Button type="submit" disabled={isSubmitting} className="w-full">
                Completar Perfil
              </Button>
            </CardFooter>
          </Card>
        </Form>
      )}
    </Formik>
    </>
  )
}

        