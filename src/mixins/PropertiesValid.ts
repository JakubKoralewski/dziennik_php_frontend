import { IStudentsPropertiesRequiringValidation } from '@/interfaces';

const studentProperties = {
	imie: 'first-name',
	nazwisko: 'last-name',
	klasa: 'class',
	telefon: 'phone-number',
} as IStudentProperties;

interface IStudentProperties {
	imie: string;
	nazwisko: string;
	klasa: string;
	telefon: string;
	[key: string]: string;
}

export default {
	methods: {
		/** Gets a student object.
		 *  Creates alerts saying which property is bad.
		 *  Returns true if all properties valid else false.
		 */
		propertiesValid(
			student: IStudentsPropertiesRequiringValidation,
			shouldCreateAlerts: boolean = true
		): boolean {
			let foundInvalidInput = false;
			for (const key of Object.keys(student)) {
				const value = student[key];
				if (!!value == false) {
					// TODO: alert component
					foundInvalidInput = true;
					if (shouldCreateAlerts) {
						const property: string = (this as any).$t(
							`student.${studentProperties[key]}`
						);

						alert(
							(this as any).$t('alert.property-invalid', {
								property,
							})
						);
					}
					break;
				}
				if (key === 'telefon' && isNaN(value as any)) {
					foundInvalidInput = true;
					if (shouldCreateAlerts) {
						const property: string = (this as any).$t(
							`student.${studentProperties[key]}`
						);
						alert(
							(this as any).$t('alert.should-be-a-number', {
								property,
							})
						);
					}
					break;
				}
			}
			return !foundInvalidInput;
		},
	},
};