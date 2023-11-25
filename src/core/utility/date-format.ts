import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CustomeDateFormat {
  public format = (dateString: string): string => {
    try {
      const targetDate = new Date(dateString);
      const yyyy = String(targetDate.getFullYear());
      const mm = String(targetDate.getMonth() + 1).padStart(2, '0');
      const dd = String(targetDate.getDate()).padStart(2, '0');
      return `${yyyy}-${mm}-${dd}`;
    } catch (e) {
      console.error('引数がDate型ではありません。');
      throw e;
    }
  };
}
