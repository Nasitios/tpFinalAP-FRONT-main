import { Acercade } from "./models/acercade";
import { Educacion } from "./models/educacion";
import { Experiencia } from "./models/experiencia";
import { Habilidad } from "./models/habilidad";
import { Perfil } from "./models/perfil";
import { Proyecto } from "./models/proyecto";

export const ACER: Acercade[] = [
    {
        id: 0,
        texto: "",
    }
]

export const EXPE: Experiencia[] = [
    {
        id: 0,
        titulo: "",
        empresa: "",
        fecha: "",
        ubicacion: "",
    }
]

export const EDU: Educacion[] = [
    {
        id: 0,
        entidad: "",
        titulo: "",
        fecha: "",
        ubicacion: "",
    }
]

export const PRO: Proyecto[] = [
    {
        id: 0,
        titulo: "",
        descripcion: "",
        link: ""
    }
]

export const HABI: Habilidad[] = [
    {
        id: 0,
        titulo: "",
        porcentaje: 0
    }
]

export const PER: Perfil[] = [
    {
        id: 0,
        nombre: "",
        titulo: "",
        ubicacion: "",
        email: "",
        imgPerfil: "",
        imgPortada: ""
    }
]