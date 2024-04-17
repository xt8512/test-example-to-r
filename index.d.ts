// index.d.ts

declare module "test-example-to-r" {
    /**
     * Suma dos números.
     * @param a Primer número.
     * @param b Segundo número.
     * @returns Suma de a y b.
     */
    export function add(a: number, b: number): number;
  
    /**
     * Resta dos números.
     * @param a Primer número.
     * @param b Segundo número.
     * @returns Resta de a y b.
     */
    export function subtract(a: number, b: number): number;
  
    /**
     * Multiplica dos números.
     * @param a Primer número.
     * @param b Segundo número.
     * @returns Multiplicación de a y b.
     */
    export function multiply(a: number, b: number): number;
  }
  