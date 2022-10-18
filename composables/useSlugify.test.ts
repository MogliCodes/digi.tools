import { describe, test, expect } from "vitest";
import { useSlugify } from "~/composables/useSlugify";

describe('useSlugify', () => {

    test('should return a string', () => {
        expect(useSlugify(12)).toBeTypeOf("string")
    })

    test.todo('should not contain blank spaces')

    test.todo('should not contain special chars')

    test.todo('should return only lowercase letters')

})
