const {describe, it, expect} = require("@jest/globals")

const Serviceapi = require('../src/services/api')




describe('testando função somar', ()=> {
    it("somando dois numeros positivos", () => {
        const result = Serviceapi.Somar(1,2)

        expect(result).toBe(3)
    })


})



describe('testando função subtrair', () => {
    it("subtraindo dois numeros positivos", () => {
        const result = Serviceapi.Sub(1,2)

        expect(result).toBe(-1)
    })
})