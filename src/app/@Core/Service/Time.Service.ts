import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TimeService {

    public get() {
        const Time = new Date().getTime()
        return Time;
    }

    public getLast30():any {
        const Now = new Date().getDate()
        const Target = new Date().setDate(Now - 30)
        return Target;
    }

    public GenTimeAge(Timestamp: any) {
        if (!Timestamp) return null
        const now = Date.now();
        const diffSeconds = Math.floor((now - Timestamp) / 1000);
        const year = 31536000;
        const day = 86400;
        const hour = 3600;
        const minute = 60;

        if (diffSeconds >= year) {
            return Math.floor(diffSeconds / year) + " ʸᵉᵃʳ";
        } else if (diffSeconds >= day) {
            return Math.floor(diffSeconds / day) + " ᴰ";
        } else if (diffSeconds >= hour) {
            return Math.floor(diffSeconds / hour) + " ᴴ";
        } else if (diffSeconds >= minute) {
            return Math.floor(diffSeconds / minute) + " ᴹ";
        } else {
            return diffSeconds + " ˢ";
        }

    }
}
