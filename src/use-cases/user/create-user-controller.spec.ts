import { describe, it, expect } from "vitest";
import { CreateUserUseCase } from "./create-user-controller";
import userInMemoryRepositorie from "../../repositories/user/in-memory/user-in-memory-repositorie";


describe("Create User Use Case", () => {
  it("should be able to create user", async () => {
    const createUser = new CreateUserUseCase(userInMemoryRepositorie);

    const user = await createUser.execute({
        name: 'test-user',
        avatar: 'test-avatar',
        banner: 'banner-test',
        discord: 'discord-userc'
    });

    expect(user.name).toEqual(expect.any(String));
  });
});
