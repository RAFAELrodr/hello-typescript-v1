import { ConsoleLogger } from './logger/ConsoleLogger';
import { Curso } from './models/Curso';

const logger = new ConsoleLogger();
const curso = new Curso('ADS', 'Analise e Desenvolvimento de Sistemas', 5);

const cursos: Curso[] = [];
cursos.push(Curso.BCC);
cursos.push(Curso.DIR);
cursos.push(Curso.MAT);

cursos.forEach((curso) => console.log(curso));

logger.log('Hello, TypeScript!');
logger.log(JSON.stringify(curso));

logger.log(curso.toString());
logger.log(Curso.BCC.toString());
logger.log(Curso.DIR.toString());
logger.log(Curso.MAT.toString());

logger.log(String(Curso.DURACAO_PADRAO));

const bcc:Curso = Curso.BCC;

console.log(bcc.toString());

console.log(bcc.encerrar().toString());

logger.log('Goodbye, TypeScript');