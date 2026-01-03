/**
 * Representa una transacción financiera.
 *
 * @remarks
 * Esta interfaz modela la información mínima que la UI necesita
 * para listar y crear transacciones.
 */
export interface Transaccion {
  /** Identificador único de la transacción. */
  id: number;
  /** Monto de la transacción en la moneda local. */
  monto: number;
  /** Comisión aplicada a la transacción. */
  comision: number;
  /** Fecha de la transacción en formato ISO (string). */
  fecha: string;
}
