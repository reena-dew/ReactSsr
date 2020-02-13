import { of } from 'rxjs';
import * as MOCK from '../../ssr/mock/loginMock';

export default class CommonService {
    public static fetchUserDetails() {
        return of(MOCK.USER_DATA);
    }
}