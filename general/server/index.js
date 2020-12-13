import filesServer from 'simple-files-server'

filesServer({ folder: 'src' }).listen(3100)
