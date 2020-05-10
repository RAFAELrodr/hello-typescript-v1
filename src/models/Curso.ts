export class Curso {
    static readonly DURACAO_PADRAO: number = 2;
    static readonly BCC = new Curso('BCC', 'Ciencia da Computação', 4);
    static readonly DIR = new Curso('DIR', 'Direito', 5);
    static readonly MAT = new Curso('MAT', 'Matematica', 4);

    sigla: string;
    descricao: string;
    duracao: number;

    status:boolean =true;

    constructor(sigla: string, descricao: string, duracao?: number) {
        this.sigla = sigla;
        this.descricao = descricao;
        this.duracao = duracao !== undefined ? duracao : Curso.DURACAO_PADRAO;
    }

    encerrar():Curso{
        this.status = false;
        return this;
    }

    toString(): string {
        return `${this.sigla} - ${this.duracao} - ${this.status}`;
    }
}