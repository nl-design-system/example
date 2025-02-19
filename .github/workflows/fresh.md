## Vers & Veilig

Het is weer tijd voor de maandelijkse ronde “Vers & Veilig”

## Patch dependencies

- [ ] patch dependencies zijn bijgewerkt

  ### Zo doe je dat

  - [ ] Bekijk of `reject` in `.ncurc.patch.cjs` moet worden bijgewerkt.
  - [ ] Draai

    ```sh
    pnpm run update-patch
    pnpm run test-update
    ```

  - [ ] Voeg problematische dependencies toe aan `.ncurc.patch.cjs` onder `reject` en probeer het nog een keer.

## Minor dependencies

- [ ] minor dependencies zijn bijgewerkt

  ### Zo doe je dat

  - [ ] Bekijk of `reject` in `.ncurc.minor.cjs` moet worden bijgewerkt.
  - [ ] Draai

    ```sh
    pnpm run update-minor
    pnpm run test-update
    ```

  - [ ] Voeg problematische dependencies toe aan `.ncurc.minor.cjs` onder `reject` en probeer het nog een keer.

## Major dependencies

- [ ] major dependencies zijn bijgewerkt óf er is een issue aangemaakt

  ### Zo doe je dat

  - [ ] Bekijk of `reject` in `.ncurc.major.cjs` moet worden bijgewerkt.
  - [ ] Draai

    ```sh
    pnpm run update-major
    pnpm run test-update
    ```

  - [ ] Voeg problematische dependencies toe aan `.ncurc.major.cjs` onder `reject` en probeer het nog een keer.

## Kwetsbaarheden

- [ ] Dependabot alerts nagekeken voor kwestbaarheden

  ### Zo doe je dat

  - [ ] Open de [Dependabot alerts](../security/dependabot)
  - [ ] Werk kwetsbaarheden bij of sluit kwetsbaarheden met een goede reden
