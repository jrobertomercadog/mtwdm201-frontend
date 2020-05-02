export interface AppProductos {
  microService?: string;
  status?: number;
  description?: string;
  message?: string;
  result?: WrapResult;
}

export interface WrapResult {
  result?: ElemProductos[];
}

export interface ElemProductos {
  codigo?: string;
  descripcion?: string;
  categoria?: string;
  proveedor?: string;
  provDescr?: string;
  precio?: number;
}