import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
export interface FinalResults {
    lfhf?: sign;
    bloodPressure?: sign;
    meanRri?: sign;
    oxygenSaturation?: sign;
    pnsIndex?: sign;
    pnsZone?: sign;
    prq?: sign;
    pulseRate?: sign;
    rmssd?: sign;
    rri?: sign;
    respirationRate?: sign;
    sd1?: sign;
    sd2?: sign;
    sdnn?: sign;
    snsIndex?: sign;
    snsZone?: sign;
    stressLevel?: sign;
    stressIndex?: sign;
    wellnessIndex?: sign;
    wellnessLevel?: sign;
    hemoglobin?: sign;
    hemoglobinA1c?: sign;
}
export interface sign {
    name: string;
    value: any;
    level?: string;
    uname?: string;
}
export interface LiveMeasurements {
    pulseRate?: number;
    respirationRate?: number;
    oxygenSaturation?: number;
}
export interface StartCameraOption {
    licenseKey: string;
    duration: number;
    sex?: string;
    age?: number;
    weight?: number;
}
/**
 * @name Binah Ai
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { BinahAi } from '@awesome-cordova-plugins/binah-ai';
 *
 *
 * constructor(private binahAi: BinahAi) { }
 *
 * ...
 *
 *
 * this.binahAi.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class BinahAiOriginal extends AwesomeCordovaNativePlugin {
    startCamera(option: StartCameraOption): Observable<any>;
    stopCamera(): Promise<any>;
    startScan(): Observable<any>;
    stopScan(): Promise<any>;
    imageValidation(): Observable<any>;
    getSessionState(): Observable<any>;
    userFaceValidation(): Observable<any>;
    getAllMeasurement(): Promise<any>;
    getMeasurementById(measurementId: string): Promise<any>;
    getMeasurementByDateTime(dateTime: string): Promise<any>;
    deleteMeasurementById(measurementId: string): Promise<any>;
    shareResult(result: string): Promise<any>;
}

export declare const BinahAi: BinahAiOriginal;