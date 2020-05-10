"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Curso = /** @class */ (function () {
    function Curso(sigla, descricao, duracao) {
        this.status = true;
        this.sigla = sigla;
        this.descricao = descricao;
        this.duracao = duracao !== undefined ? duracao : Curso.DURACAO_PADRAO;
    }
    Curso.prototype.encerrar = function () {
        this.status = false;
        return this;
    };
    Curso.prototype.toString = function () {
        return this.sigla + " - " + this.duracao + " - " + this.status;
    };
    Curso.DURACAO_PADRAO = 2;
    Curso.BCC = new Curso('BCC', 'Ciencia da Computação', 4);
    Curso.DIR = new Curso('DIR', 'Direito', 5);
    Curso.MAT = new Curso('MAT', 'Matematica', 4);
    return Curso;
}());
exports.Curso = Curso;
