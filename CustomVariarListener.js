import VariarListener from './generated/VariarListener.js';

export default class CustomVariarListener extends VariarListener {
    enterSalida(ctx) {
        console.log('Salida:', ctx.expresion().getText());
    }
}
