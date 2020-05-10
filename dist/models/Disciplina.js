"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Disciplina = /** @class */ (function () {
    function Disciplina(descricao, professor, quantidadeAlunos, notaAprovacao, permiteDependencia) {
        this.descricao = descricao;
        this.professor = professor;
        this.quantidadeAlunos = quantidadeAlunos !== undefined ? quantidadeAlunos : Disciplina.QUANTIDADE_ALUNOS;
        this.notaAprovacao = notaAprovacao !== undefined ? notaAprovacao : Disciplina.NOTA_APROVACAO;
        this.permiteDependencia = this.notaAprovacao > 0 ? Disciplina.DEPENDENCIA : false;
    }
    Disciplina.prototype.atribuirProfessor = function (professor) {
        this.professor = professor;
    };
    Disciplina.prototype.definirNotaAprovacao = function (nota) {
        this.notaAprovacao = nota;
        this.permiteDependencia = this.notaAprovacao > 0 ? Disciplina.DEPENDENCIA : false;
    };
    Disciplina.prototype.toString = function () {
        return "Descricao: " + this.descricao + ", \n                Professor: " + this.professor + ",\n                Quantidade de Alunos: " + this.quantidadeAlunos + ", \n                Nota para Aprovacao: " + this.notaAprovacao + ",\n                Permissao de Dependencia: " + this.permiteDependencia;
    };
    Disciplina.QUANTIDADE_ALUNOS = 30;
    Disciplina.NOTA_APROVACAO = 7.0;
    Disciplina.DEPENDENCIA = true;
    Disciplina.QUALID_SOFTWARE = new Disciplina('Qualidade de Software', 'Talo', 50, 8, true);
    Disciplina.MAT_FINANCEIRA = new Disciplina('Matematica Financeira', 'Marcelo Manfio', 20, 0, false);
    Disciplina.ENG_SOFTWARE = new Disciplina('Engenheria de Software', 'Diomara', 50, 0);
    Disciplina.TOP_AVANCADOS = new Disciplina('Topicos Avançados', 'Domingos', 10, 5);
    return Disciplina;
}());
exports.Disciplina = Disciplina;
