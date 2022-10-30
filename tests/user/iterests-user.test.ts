import {generateNewUserInterests as interest, Interests} from "../../src/helpers/user-interests";

describe("user interests", () => {
    test("should equal user interests to new interests",async () => {
        const mockInterests = ['Buyer','Seller','Spam'];
        const mockUser = {
            isArchived: false,
            isBuyer: true,
            isSeller: true,
            isSpam: true
        }

        Object.freeze(mockUser);

        const newUserIterests = await interest(mockInterests, mockUser);

        expect(newUserIterests).toEqual(mockUser);
    })
    test("should unchange user interests",async () => {
        const mockInterests = ['Buyerr','Seeller','Sppam'];
        const mockUser : Interests = {
            isArchived: false,
            isBuyer: false,
            isSeller: false,
            isSpam: false
        }   

        Object.freeze(mockUser);

        const newUserIterests = await interest(mockInterests, mockUser);

        expect(newUserIterests).toEqual(mockUser);
    })
    test("should be unequal",async () => {
        const mockInterests = ['Buyer','Spam'];
        const mockUser = {
            isArchived: false,
            isBuyer: true,
            isSeller: false,
        }   

        Object.freeze(mockUser);

        const newUserIterests = await interest(mockInterests, mockUser);

        expect(newUserIterests).toEqual(mockUser);
    })
})