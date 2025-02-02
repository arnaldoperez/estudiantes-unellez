<template>
  <main>
    <ContentDoc />
    <ContentList path="/estudiantes" v-slot="{ list }">
      <v-list lines="two">
        <v-list-item v-for="student in list" :key="student._path" >
          <!-- <pre>{{ student }}</pre> -->
          <v-list-item-title>
            <NuxtLink :to="student._path">{{ student.name }}</NuxtLink>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </ContentList>
  </main>
</template>