<template>
    <section class="contact">
        <div class="contact-header">Let's Connect!</div>
        <div class="contact-info">
            <div class="contact-info-item name">{{ name }}</div>
            <div class="contact-info-item email">{{ email }}</div>
            <div class="contact-info-item phone">{{ phone }}</div>
        </div>
        <div class="links">
            <a
                v-for="(linkInfo, key) in links"
                :key="key"
                :href="linkInfo.url"
                class="contact-link"
                target="_blank"
            >
                <img :src="linkInfo.mediaUrl" :alt="linkInfo.text" rel="noopener noreferrer" />
            </a>
        </div>
    </section>
</template>

<script setup>
    import contactInfo from '@/data/contact.json';

    const { name, email, phone, socials: links = {} } = contactInfo;

    console.log({ name, email, phone, links });
</script>

<style lang="scss">
    section.contact {
        @include flex-container(column, nowrap, center, center);
        font-size: 2.5vmin;
        text-align: center;

        .contact-header {
            font-family: 'Montserrat Bold', sans-serif;
            font-size: 1.5em;
        }

        .contact-info {
            margin: 1em auto;

            .contact-info-item {
                font-family: 'Montserrat Medium', sans-serif;
                margin: 0.5em auto;
            }
        }

        .links {
            @include flex-container(row, nowrap, center, center);

            a.contact-link {
                margin: 0.5em;

                &,
                img {
                    border-radius: 50%;
                }

                img {
                    max-width: 6em;
                    max-height: 6em;
                }
            }
        }
    }
</style>
