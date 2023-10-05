import { IClient, IClientInputDTO } from "../interfaces/IClient";
import { createUUID } from "../utils/createUUID";

export class Patient {
    private readonly id: string;
    private name: string;
    private age: string;
    private peopleWhoLivesWith: string;
    private perCapitaIncome: string;
    private schooling: string;
    private hemodialysis: string;
    private DPOCHistory: string;
    private respiratoryProblem: string;
    private healthyEating: string;
    private anxiety: string;
    private emotionalLackOfControl: string;
    private insomnia: string;
    private gender: string;
    private alcoholFrequence: string;
    private smokingFrequence: string;
    private workoutFrequence: string;
    private historicOfCancer: string;
    private historicOfDiabetes: string;
    private historicOfObesity: string;
    private unimedCard: string;

    public static total: number;

    constructor(props: IClientInputDTO) {
        this.id = props.id || createUUID();
        this.name = props.name;
        this.age = props.age ;
        this.unimedCard = props.unimedCard;        
        this.peopleWhoLivesWith = props.peopleWhoLivesWith || "0";
        this.perCapitaIncome = props.perCapitaIncome || "0";
        this.schooling = props.schooling || "0";
        this.hemodialysis = props.hemodialysis || "0";
        this.DPOCHistory = props.DPOCHistory || "0";
        this.respiratoryProblem = props.respiratoryProblem || "0";
        this.healthyEating = props.healthyEating || "0";
        this.anxiety = props.anxiety || "0";        
        this.emotionalLackOfControl = props.emotionalLackOfControl || "0";        
        this.insomnia = props.insomnia || "0";        
        this.gender = props.gender || "0";        
        this.alcoholFrequence = props.alcoholFrequence || "0";        
        this.smokingFrequence = props.smokingFrequence || "0";        
        this.workoutFrequence = props.workoutFrequence || "0";        
        this.historicOfCancer = props.historicOfCancer || "0";        
        this.historicOfDiabetes = props.historicOfDiabetes || "0";        
        this.historicOfObesity = props.historicOfObesity || "0";    
    }

    static create(props: IClientInputDTO): Patient {
        if(!props.id) this.total++;

        return new Patient(props);
    }

    public perfil(): any {
        return {
            'id': this.id,
            'name': this.name,
            'age': this.age,
            'unimedCard': this.unimedCard,
            'peopleWhoLivesWith': this.peopleWhoLivesWith,
            'perCapitaIncome': this.perCapitaIncome,
            'schooling': this.schooling,
            'hemodialysis': this.hemodialysis,
            'DPOCHistory': this.DPOCHistory,
            'respiratoryProblem': this.respiratoryProblem,
            'healthyEating': this.healthyEating,
            'anxiety': this.anxiety,
            'emotionalLackOfControl': this.emotionalLackOfControl,
            'insomnia': this.insomnia,
            'gender': this.gender,
            'alcoholFrequence': this.alcoholFrequence,
            'smokingFrequence': this.smokingFrequence,
            'workoutFrequence': this.workoutFrequence,
            'historicOfCancer': this.historicOfCancer,
            'historicOfDiabetes': this.historicOfDiabetes,
            'historicOfObesity': this.historicOfObesity
        }
    }

    public toJSON(): IClient {
        return {
            id: this.id,
            name: this.name,
            age: this.age,
            unimedCard: this.unimedCard,
            peopleWhoLivesWith: this.peopleWhoLivesWith,
            perCapitaIncome: this.perCapitaIncome,
            schooling: this.schooling,
            hemodialysis: this.hemodialysis,
            DPOCHistory: this.DPOCHistory,
            respiratoryProblem: this.respiratoryProblem,
            healthyEating: this.healthyEating,
            anxiety: this.anxiety,
            emotionalLackOfControl: this.emotionalLackOfControl,
            insomnia: this.insomnia,
            gender: this.gender,
            alcoholFrequence: this.alcoholFrequence,
            smokingFrequence: this.smokingFrequence,
            workoutFrequence: this.workoutFrequence,
            historicOfCancer: this.historicOfCancer,
            historicOfDiabetes: this.historicOfDiabetes,
            historicOfObesity: this.historicOfObesity
        }
    }
}