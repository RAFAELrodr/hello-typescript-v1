export class Disciplina {

    static readonly QUANTIDADE_ALUNOS: number = 30;
    static readonly NOTA_APROVACAO: number = 7.0;
    static readonly DEPENDENCIA: boolean = true;

    static readonly QUALID_SOFTWARE = new Disciplina('Qualidade de Software', 'Talo', 50, 8, true);
    static readonly MAT_FINANCEIRA = new Disciplina('Matematica Financeira', 'Marcelo Manfio', 20, 0, false);
    static readonly ENG_SOFTWARE = new Disciplina('Engenheria de Software', 'Diomara', 50, 0);
    static readonly TOP_AVANCADOS = new Disciplina('Topicos Avançados', 'Domingos', 10, 5);

    descricao: string;
    professor: string;
    quantidadeAlunos: number;
    notaAprovacao: number;
    permiteDependencia: boolean;

    constructor(descricao: string, professor: string, quantidadeAlunos?: number, notaAprovacao?: number,
        permiteDependencia?: boolean) {

        this.descricao = descricao;
        this.professor = professor;
        this.quantidadeAlunos = quantidadeAlunos !== undefined ? quantidadeAlunos : Disciplina.QUANTIDADE_ALUNOS;
        this.notaAprovacao = notaAprovacao !== undefined ? notaAprovacao : Disciplina.NOTA_APROVACAO;
        this.permiteDependencia = this.notaAprovacao > 0 ? Disciplina.DEPENDENCIA : false;
    }

    atribuirProfessor(professor: string): void {
        this.professor = professor;
    }

    definirNotaAprovacao(nota: number): void {
        this.notaAprovacao = nota;
        this.permiteDependencia = this.notaAprovacao > 0 ? Disciplina.DEPENDENCIA : false;
    }

    toString(): string {
        return `Descricao: ${this.descricao}, 
                Professor: ${this.professor},
                Quantidade de Alunos: ${this.quantidadeAlunos}, 
                Nota para Aprovacao: ${this.notaAprovacao},
                Permissao de Dependencia: ${this.permiteDependencia}`;
    }
}