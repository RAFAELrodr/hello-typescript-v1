import { Disciplina } from './models/Disciplina';
import { ConsoleLogger } from './logger/ConsoleLogger';
import { Curso } from './models/Curso';

const logger = new ConsoleLogger();
const disciplina = new Disciplina('Desenvolvimento Movel', 'Guilherme Farto');

const disciplinas: Disciplina[] = [];
disciplinas.push(Disciplina.MAT_FINANCEIRA);
disciplinas.push(Disciplina.QUALID_SOFTWARE);
disciplinas.push(Disciplina.TOP_AVANCADOS);
disciplinas.push(Disciplina.ENG_SOFTWARE);

logger.log('<<<< HELLO TYPESCRIPT >>>>')
logger.log(JSON.stringify(disciplina));

logger.log('<<<< DISICPLINAS STATIC >>>>');

logger.log(Disciplina.ENG_SOFTWARE.toString());
logger.log(Disciplina.MAT_FINANCEIRA.toString());
logger.log(Disciplina.QUALID_SOFTWARE.toString());
logger.log(Disciplina.TOP_AVANCADOS.toString());

logger.log('<<<< DISCIPLINA ARRAY >>>>');
disciplinas.forEach((disciplina) => console.log(disciplina.toString()));

console.log('DISCIPLINA FILTRADA');
const disciplinaFilter: Disciplina[] = disciplinas
    .filter((disciplina) => disciplina.permiteDependencia == true);
console.log(disciplinaFilter);

logger.log('<<<< Atribuir Professor e Nota de Dependecia >>>>');

const engSoftware: Disciplina = Disciplina.ENG_SOFTWARE;
engSoftware.atribuirProfessor('Almir');
engSoftware.definirNotaAprovacao(5);
logger.log(engSoftware.toString());

logger.log('Goodbye, TypeScript');