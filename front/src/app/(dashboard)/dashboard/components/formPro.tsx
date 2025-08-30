

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
import { UpdateUserPayload } from '@/types/professional'
import { updatePro } from '@/services/profesionals'
import { useAuth } from '@/context/authcontext'

interface FormValues {
  dni: string
  categoriesId: string
  subcategory: string[]
  city: string
  streetNumber: string
  aptoNumber: string
  birthdate?: string
}

const categories = [
  { id: '07917bce-15f3-461d-a7b3-d45809da6dd6', name: 'plomeria' },
  { id: 'd16cf338-af25-45a6-a5c3-da3d371645df', name: 'electricidad' },
  { id: 'ed17826c-1f2a-47a2-bb56-b83ae948f2e7', name: 'mascotas' },
  { id: 'e40e456c-bf4e-446b-954e-b0124f8247db', name: 'pintura' },
  { id: 'a87c16a6-4b25-4748-928b-ded36bd36b63', name: 'jardineria' },
  { id: 'c066beed-a172-445f-b183-af1abc4bcaf6', name: 'limpieza' },
]

const subcategoriesMap: Record<string, string[]> = {
  electricidad: [
    'Instalación de luminarias',
    'Reparación de cortocircuitos',
    'Tableros eléctricos',
    'Certificados de seguridad',
    'Instalación de tomas y llaves',
    'Cableado estructurado',
    'Automatización de portones',
    'Medición de consumo eléctrico',
  ],
  plomeria: [
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
  pintura: [
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
  dni: Yup.string().required('Este campo es obligatorio'),
  categoriesId: Yup.string().required('Selecciona un rubro'),
  subcategory: Yup.array().of(Yup.string()).min(4, 'Selecciona al menos 4 servicios'),
  city: Yup.string().required('Este campo es obligatorio'),
  streetNumber: Yup.string().required('Este campo es obligatorio'),
  aptoNumber: Yup.string().required('Este campo es obligatorio'),
  birthdate: Yup.string().required('Este campo es obligatorio'),
})

export const FormPro = () => {
  const {token} = useAuth()
  return (
    <>
      <h1 className="mb-6 text-4xl font-bold text-hero-black font-Title">Completá tu Perfil</h1>
     <Formik<FormValues>
  initialValues={{
    aptoNumber: '',
    dni: '',
    categoriesId: '',
    subcategory: [],
    city: '',

    streetNumber: '',
    birthdate: '',
  }}
  validationSchema={validationSchema}
onSubmit={async (values) => {
  if (!values.birthdate) {
    alert('La fecha de nacimiento es obligatoria')
    return
  }

  const payload: UpdateUserPayload = {
     dni: values.dni,
    categoriesId: values.categoriesId,
    birthdate: new Date(values.birthdate).toISOString(),
    city: values.city,
    aptoNumber: values.aptoNumber,
    streetNumber: parseInt(values.streetNumber, 10),
    imageProfile: '',
    subcategories: values.subcategory,
  }
console.log(payload)
  try {
    await updatePro(payload, token!)
    alert('✅ Perfil actualizado correctamente')
  } catch (error: any) {
    alert(`❌ Error al actualizar perfil: ${error.message}`)
  }


  }}
>
  {({ values, setFieldValue, isSubmitting }) => {
    const selectedCategoryName = categories.find(c => c.id === values.categoriesId)?.name



          return (
            <Form>
              <Card className="items-center w-full max-w-2xl shadow-lg bg-hero-white">
                <CardHeader className='flex flex-col items-center '>
                  <CardTitle className="text-xl font-Title">Formulario de Verificación Profesional</CardTitle>
                  <CardDescription className='font-Text'>Completá tus datos para verificar tu perfil</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <label htmlFor="birthdate">Fecha de nacimiento</label>
                    <Field name="birthdate" type="date" as={Input} />
                    <ErrorMessage name="birthdate" component="p" className="text-sm text-red-500" />
                  </div>

                  <div>
                    <label htmlFor="dni">DNI / Identificación</label>
                    <Field name="dni" as={Input} />
                    <ErrorMessage name="dni" component="p" className="text-sm text-red-500" />
                  </div>

                  <div>
                    <label>Rubro</label>
                    <Select onValueChange={(val) => setFieldValue('categoriesId', val)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tu rubro" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map(({ id, name }) => (
                          <SelectItem key={id} value={id}>{name.charAt(0).toUpperCase() + name.slice(1)}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <ErrorMessage name="categoriesId" component="p" className="text-sm text-red-500" />
                  </div>

                  {selectedCategoryName && (
                    <div>
                      <label>Servicios específicos (mínimo 4)</label>
                      <div className="grid grid-cols-2 gap-2">
                        {subcategoriesMap[selectedCategoryName]?.map((item) => (
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
                  <div>
                    <label htmlFor="aptoNumber">Calle</label>
                    <Field name="aptoNumber" as={Input}placeholder="Ej. Av. Córdoba" />
                    <ErrorMessage name="aptoNumber" component="p" className="text-sm text-red-500" />
                  </div>

                  <div>
                    <label htmlFor="streetNumber">Altura</label>
                    <Field name="streetNumber" as={Input} type="number" placeholder="Ej. 2450" />
                    <ErrorMessage name="streetNumber" component="p" className="text-sm text-red-500" />
                  </div>

                </CardContent>

                <CardFooter>
                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    Completar Perfil
                  </Button>
                </CardFooter>
              </Card>
            </Form>
          )
        }}
      </Formik>
    </>
  )
}