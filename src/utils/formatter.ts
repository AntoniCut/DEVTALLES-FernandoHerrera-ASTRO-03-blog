//  -------------------------------------------------------
//  ----------  /03-blog/src/utils/formatter.ts  ----------
//  -------------------------------------------------------

export class Formatter {

    static formatDate( value: Date): string {

        const date = new Date( value );

        return Intl.DateTimeFormat('es-ES', {
            year: 'numeric',
            month: 'long',
            day: '2-digit'

        }).format(date);
    }
}
