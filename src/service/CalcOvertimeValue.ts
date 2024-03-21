import { StoreData, GetData } from "../localStorage";
import { CalcParamsState } from "../stores/CalcParamsStore";


type OvertimeBody = {
    initDate: string
    endDate: string
    hours: number
    value: number
}

const CalcOvertimeValue = async (initialDate: string, finalDate: string, totalHorasDiurnas: number, totalHorasEspeciais: number, totalHorasNoturnas: number, calcParams: CalcParamsState) => {

    if (
        totalHorasEspeciais > 0 &&
        totalHorasDiurnas === 0 &&
        totalHorasNoturnas === 0
    ) {
        const CalcHourPrice =
            totalHorasEspeciais *
            (calcParams.HourPrice * (1 + calcParams.SundaysTimePercentage / 100));

        const OvertimeBody: OvertimeBody = {
            initDate: initialDate,
            endDate: finalDate,
            hours: totalHorasEspeciais,
            value: CalcHourPrice,
        };

        try {
            if (calcParams?.Overtimes?.length > 0) {
                const OvertimesData = [...calcParams.Overtimes, OvertimeBody];
                await StoreData("Overtimes", JSON.stringify(OvertimesData));
            } else {
                const OvertimesData = [OvertimeBody];
                await StoreData("Overtimes", JSON.stringify(OvertimesData));
            }
        } catch (error) {
            console.log(error)
        }
    } else if (totalHorasEspeciais === 0) {
        const MorningOvetime =
            totalHorasDiurnas *
            (calcParams.HourPrice * (1 + calcParams.DayTimePercentage / 100));

        const NightOvertime =
            totalHorasNoturnas *
            (calcParams.HourPrice * (1 + calcParams.NightTimePercentage / 100));

        const OvertimeBody: OvertimeBody = {
            initDate: initialDate,
            endDate: finalDate,
            hours: totalHorasDiurnas + totalHorasNoturnas,
            value: MorningOvetime + NightOvertime,
        };

        try {
            if (calcParams?.Overtimes?.length > 0) {
                const OvertimesData = [...calcParams.Overtimes, OvertimeBody];
                await StoreData("Overtimes", JSON.stringify(OvertimesData));

                calcParams.setOvertime(OvertimesData)
            } else {
                const OvertimesData = [OvertimeBody];
                await StoreData("Overtimes", JSON.stringify(OvertimesData));

                calcParams.setOvertime(OvertimesData)
            }
        } catch (error) {
            console.log(error)
        }
    } else {
        const SpecialOvertime =
            totalHorasEspeciais *
            (calcParams.HourPrice * (1 + calcParams.SundaysTimePercentage / 100));

        const MorningOvetime =
            totalHorasDiurnas *
            (calcParams.HourPrice * (1 + calcParams.DayTimePercentage / 100));

        const NightOvertime =
            totalHorasNoturnas *
            (calcParams.HourPrice * (1 + calcParams.NightTimePercentage / 100));

        const OvertimeBody: OvertimeBody = {
            initDate: initialDate,
            endDate: finalDate,
            hours: totalHorasDiurnas + totalHorasNoturnas + totalHorasEspeciais,
            value: MorningOvetime + NightOvertime + SpecialOvertime,
        };

        try {
            if (calcParams?.Overtimes?.length > 0) {
                const OvertimesData = [...calcParams.Overtimes, OvertimeBody];
                await StoreData("Overtimes", JSON.stringify(OvertimesData));
            } else {
                const OvertimesData = [OvertimeBody];
                await StoreData("Overtimes", JSON.stringify(OvertimesData));
            }
        } catch (error) {
            console.log(error)
        }
    }
};

export default CalcOvertimeValue;