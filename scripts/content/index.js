import sanidad from './sanidad.js?v=20261021-cosecha-theme';
import cosecha from './cosecha.js?v=20261021-cosecha-theme';
export const areas = [sanidad, cosecha, ...['Recursos Humanos','Administración','Operaciones','Logística','Sistemas','Mantenimiento','Calidad'].map((name,i)=>({id:`future-${i}`,name,soon:true,icon:'folder',description:'Próximamente'}))];
export const links = {
 claude:{label:'Abrir Claude',url:'https://claude.ai'},
 projects:{label:'Abrir Proyectos en Claude',url:'https://claude.ai/projects'},
 skills:{label:'Instrucciones sobre Skills',url:'https://support.claude.com/en/articles/12512180-use-skills-in-claude'},
 memory:{label:'Documentación de Memoria',url:'https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context'}
};
